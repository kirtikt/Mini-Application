using Electronics.Service;
using Microsoft.AspNetCore.Mvc;
using Electronics.DTOs;

namespace Electronics.Controllers
{


   
        [ApiController]
        [Route("api/[controller]")]
        public class AuthController : ControllerBase
        {
            private readonly IAuthService _authService;

            public AuthController(IAuthService authService)
            {
                _authService = authService;
            }

            [HttpPost("login")]
            public IActionResult Login([FromBody] LoginDTO loginDto)
            {
                var token = _authService.Authenticate(loginDto.Username, loginDto.Password);
                if (token == null)
                    return Unauthorized(new { message = "Invalid credentials" });

                return Ok(new { token });
            }
        }
    }


