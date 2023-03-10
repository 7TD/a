using LearnProjectBackend.Models;
using Microsoft.AspNetCore.Mvc;

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
    public async Task AddPerson(Person person)
    {
        await _dbContext.Persons.AddAsync(person);
    }
}