using LearnProjectBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace LearnProjectBackend;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }

    public DbSet<Person> Persons { get; set; } = null!;
    public DbSet<Image> Image { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}