using LearnProjectBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearnProjectBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController
{
    public class ImagesController : Controller
    {
        private readonly AppDbContext _dbContext;

        public ImagesController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task AddImage([FromBody] byte[] img)
        {
            await _dbContext.Image.AddAsync(new Image
            {
                Photo = img
            });
            await _dbContext.SaveChangesAsync();
        }
    }
}