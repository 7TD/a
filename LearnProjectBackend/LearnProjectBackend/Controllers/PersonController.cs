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
    public async Task AddPerson([FromBody] string[] name)
    {
        foreach (var firstName in name)
        {
            await _dbContext.Persons.AddAsync(new Person
            {
                FirstName = firstName
            });
        }
        await _dbContext.SaveChangesAsync();
    }

    [HttpPost]
     public async Task<List<Person>> GetPersons([FromBody] int[] Ids)
     {
         return await _dbContext.Persons.Where(x => Ids.Contains(x.Id)).ToListAsync();
     }

     [HttpGet]
    public async Task<List<Person>> GetAllPersons()
    {
        return await _dbContext.Persons.ToListAsync();
    }

    [HttpPost("delete")]
    public async Task DeletePersons([FromBody] int[] ids)
    {
        foreach (var id in ids)
        {
            var item = await _dbContext.Persons.FirstOrDefaultAsync(p => p.Id == id);
            _dbContext.Persons.Remove(item);
        }

        await _dbContext.SaveChangesAsync();
    }

    [HttpDelete("{id}")]
    public async Task DeletePerson(int id)
    {
        var item = await _dbContext.Persons.FirstOrDefaultAsync(p => p.Id == id);
        if (item == null) return;

        _dbContext.Persons.Remove(item);
        await _dbContext.SaveChangesAsync();
    }

    // [HttpPut]
    // public async Task PutPersons(Person[] person)
    // {
    //     foreach (var p in person)
    //     {
    //         await _dbContext.Persons.
    //     }
    // }
}

