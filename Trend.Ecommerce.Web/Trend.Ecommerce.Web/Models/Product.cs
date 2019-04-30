using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Trend.Ecommerce.Web.Models
{
    public class Product
    {
        public int productId { get; set; }   
        public string name { get; set; }
        public DateTime DateCreated { get; set; }
        public int quuantity { get; set; }
    }
}
