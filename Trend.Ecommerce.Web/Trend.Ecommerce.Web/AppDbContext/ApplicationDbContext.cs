using Microsoft.EntityFrameworkCore;
using Trend.Ecommerce.Web.Models;

namespace Trend.Ecommerce.Web.AppDbContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { }
        public DbSet<Product> Products { get; set; }
    }
}
