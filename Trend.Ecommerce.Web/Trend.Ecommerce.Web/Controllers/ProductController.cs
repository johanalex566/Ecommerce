using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trend.Ecommerce.Web.AppDbContext;
using Trend.Ecommerce.Web.Models;

namespace Trend.Ecommerce.Web.Controllers
{
    [Route("api/product")]
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
            try
            {
                return contex.Products;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                contex.Products.Add(product);
                await contex.SaveChangesAsync();
                return CreatedAtAction("GetProduct", new { id = product.productId }, product);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                contex.Dispose();
            }
        }

        // GET: api/Personas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct([FromRoute] int id, bool incluirDirecciones = false)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Product product;
            product = await contex.Products.SingleOrDefaultAsync(m => m.productId == id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
    }
}