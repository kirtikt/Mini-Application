using Electronics.Models;

namespace Electronics.Service
{
    public interface ICartItemService
    {
        IEnumerable<CartItem> GetCartItemsByUserId(int userId);
        CartItem GetCartItem(int cartItemId);
        void AddCartItem(CartItem cartItem);
        void UpdateCartItem(CartItem cartItem);
        void RemoveCartItem(int cartItemId);
        decimal Checkout(int userId);
    }
}
