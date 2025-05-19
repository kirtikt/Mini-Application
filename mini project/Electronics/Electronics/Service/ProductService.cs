using Electronics.Models;
using Electronics.Repository;

namespace Electronics.Service
{
    public class ProductService : IProductService
    {
        private readonly Appdbcontext context;

        public ProductService(Appdbcontext context)
        {
            this.context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return context.Products.ToList();
        }

        public Product GetProductById(int id)
        {
            return context.Products.FirstOrDefault(p => p.ProductId == id);
        }
    }

}
