using Electronics.Models;

namespace Electronics.Service
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
    }

}
