using Electronics.Models;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Electronics.Repository;
using Microsoft.EntityFrameworkCore;

namespace Electronics.Service
{
    public class CartItemService : ICartItemService
    {
        private readonly Appdbcontext _context;

        public CartItemService(Appdbcontext context)
        {
            _context = context;
        }

        public IEnumerable<CartItem> GetCartItemsByUserId(int userId)
        {
            return _context.CartItems
                .Include(ci => ci.Product)
                .Where(ci => ci.UserId == userId)
                .ToList();
        }

        public CartItem GetCartItem(int cartItemId)
        {
            return _context.CartItems
                .Include(ci => ci.Product)
                .FirstOrDefault(ci => ci.CartItemId == cartItemId);
        }

        public void AddCartItem(CartItem cartItem)
        {
            _context.CartItems.Add(cartItem);
            _context.SaveChanges();
        }

        public void UpdateCartItem(CartItem cartItem)
        {
            _context.CartItems.Update(cartItem);
            _context.SaveChanges();
        }

        public void RemoveCartItem(int cartItemId)
        {
            var cartItem = _context.CartItems.Find(cartItemId);
            if (cartItem != null)
            {
                _context.CartItems.Remove(cartItem);
                _context.SaveChanges();
            }
        }

        public decimal Checkout(int userId)
{
    var cartItems = GetCartItemsByUserId(userId).ToList();
    decimal total = (decimal)cartItems.Sum(item => item.Product.Price * item.Quantity);

    foreach (var item in cartItems)
    {
        _context.CartItems.Remove(item);
    }

    _context.SaveChanges();
    return total;
}

    }

}
