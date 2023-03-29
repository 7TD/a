using LearnProjectBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LearnProjectBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : Controller
{
    private readonly AppDbContext _dbContext;
    
    public ImageController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpPost]
    public async Task AddImage([FromForm] IFormFile img)
    {
        byte[] CoverImageBytes = null;
        BinaryReader reader = new BinaryReader(img.OpenReadStream());
        CoverImageBytes = reader.ReadBytes((int)img.Length);

        await _dbContext.Image.AddAsync(new Image
        { 
            Photo = CoverImageBytes
        });
        await _dbContext.SaveChangesAsync();
    }

    [HttpGet]
    public async Task<List<Image>> GetAllImages()
    {
        return await _dbContext.Image.ToListAsync();
    }
}