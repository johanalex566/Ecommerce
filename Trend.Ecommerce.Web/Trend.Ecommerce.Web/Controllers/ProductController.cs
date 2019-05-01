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
            return new List<Product>()
            {
                new Product() {productId=01, name ="Frijoles", quuantity = 2 , DateCreated= new DateTime(2019,06,14)},
                new Product() {productId=01, name ="Arroz", quuantity = 5 , DateCreated= new DateTime(2020,01,16)},
            };
        }
    }
}