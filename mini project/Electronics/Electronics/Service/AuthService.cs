using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Electronics.Repository;
using Electronics.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

public class AuthService : IAuthService
{
    private readonly IConfiguration _configuration;
    private readonly Appdbcontext _appdbcontext; 

    public AuthService(IConfiguration configuration, Appdbcontext appdbcontext)
    {
        _configuration = configuration;
        _appdbcontext = appdbcontext;
    }

    public string Authenticate(string username, string password)
    {
        var auth = _appdbcontext.Users.FirstOrDefault(u => u.Username == username && u.Password == password);

        if (auth == null)
        {
            return null;
        }

        var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
        var tokenHandler = new JwtSecurityTokenHandler();

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, username)
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
