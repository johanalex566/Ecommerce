using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trend.Ecommerce.Web.AppDbContext;
using Trend.Ecommerce.Web.Models;

namespace Trend.Ecommerce.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext contex;
        public ProductController(ApplicationDbContext context)
        {
            this.contex = context;
        }
        //GET: api/product
        [HttpGet("[action]")]
        public IEnumerable<Product> GetProducts()
        {
            return contex.Products;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        { 
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            contex.Products.Add(product);
            await contex.SaveChangesAsync();
            return CreatedAtAction("GetProduct", new { id = product.productId }, product);
        }
    }
}