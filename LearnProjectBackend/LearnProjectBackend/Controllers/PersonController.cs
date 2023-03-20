using LearnProjectBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LearnProjectBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PersonController : Controller
{
    private readonly AppDbContext _dbContext;

    public PersonController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpPost("person")]
    public async Task AddPerson([FromBody] string name)
    {
        await _dbContext.Persons.AddAsync(new Person
        {
            FirstName = name
        });
        await _dbContext.SaveChangesAsync();
    }

    [HttpGet("{id}")]
    public async Task<Person?> GetPerson(int id)
    {
        var item = await _dbContext.Persons.FirstOrDefaultAsync(p=> p.Id == id);
        return item;
    }

    [HttpGet]
    public async Task<List<Person>> GetAllPersons()
    {
        return await _dbContext.Persons.Select(x => x).ToListAsync();
    }

    [HttpDelete("{id}")]
    public async Task DeletePersons(int id)
    {
        var item = await _dbContext.Persons.FirstOrDefaultAsync(p => p.Id == id);
        if (item == null) return;

        _dbContext.Persons.Remove(item);
        await _dbContext.SaveChangesAsync();
    }
}

