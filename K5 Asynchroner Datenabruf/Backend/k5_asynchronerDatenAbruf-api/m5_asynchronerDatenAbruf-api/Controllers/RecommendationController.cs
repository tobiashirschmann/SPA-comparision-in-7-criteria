using Microsoft.AspNetCore.Mvc;

namespace m5_asynchronerDatenAbruf_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecommendationController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Recommendation>> GetAsync()
        {
            List<Recommendation> products = new();

            await Task.Delay(500);
            products.Add(new Recommendation()
            {
                Id = 1,
                DeliveryCost = 5.99,
                Rating = 4,
                Summary = "Speziell und individuell für In & Outdoor geeignet. Schlank und kompakt, ideal geeignet für Ihre Garage, die Werkstatt oder Gartenhäuser",
                Price = 19.91,
                Description = "Quarz Infrarot Heizung"
            });

            products.Add(new Recommendation()
            {
                Id = 2,
                DeliveryCost = 0,
                Rating = 5,
                Summary = "Super für Tennis, Fußball und sonstige Freizeitaktivitäten.",
                Price = 12.95,
                Description = "Nike U NK Everyday CUSH Crew 3PR Socks"
            });

            return products;
        }
    }
}