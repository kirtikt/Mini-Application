using System.ComponentModel.DataAnnotations;

namespace Electronics.Models
{
    

public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        public string Name { get; set; }

        
        public string Category { get; set; }  

        public string ImageUrl { get; set; }

        [Required]
        public Double Price { get; set; }
    }

}

