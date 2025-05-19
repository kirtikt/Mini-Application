using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Electronics.Service;
using Electronics.DTOs;
using Electronics.Models;

namespace Electronics.Controllers
{
    

    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CartController : ControllerBase
    {
        private readonly ICartItemService _cartService;

        public CartController(ICartItemService cartService)
        {
            _cartService = cartService;
        }

        private int GetUserId()
        {
            return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
        }

        [HttpPost("add")]
        public IActionResult AddToCart([FromBody] CartItemDTO dto)
        {
            var userId = GetUserId();
            _cartService.AddCartItem(new CartItem
            {
                UserId = userId,
                ProductId = dto.ProductId,
                Quantity = dto.Quantity
            });
            return Ok(new { message = "Product added to cart" });
        }

        [HttpGet]
        public IActionResult GetCart()
        {
            var userId = GetUserId();
            var items = _cartService.GetCartItemsByUserId(userId);
            return Ok(items);
        }

        [HttpPost("checkout")]
        public IActionResult Checkout()
        {
            var userId = GetUserId();
            var total = _cartService.Checkout(userId);
            return Ok(new { message = "Checkout complete", totalCost = total });
        }
    }
}
