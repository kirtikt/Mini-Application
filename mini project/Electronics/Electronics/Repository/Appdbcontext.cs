using Electronics.Models;
using Microsoft.EntityFrameworkCore;


namespace Electronics.Repository
{
    public class Appdbcontext : DbContext
    {
        public Appdbcontext(DbContextOptions<Appdbcontext> options)
                 : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        public DbSet<CartItem> CartItems { get; set; }
        public object CartItem { get; internal set; }
    }
}
