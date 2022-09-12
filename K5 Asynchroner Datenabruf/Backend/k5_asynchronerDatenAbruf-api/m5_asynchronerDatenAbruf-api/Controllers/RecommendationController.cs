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
                Summary = "Speziell und individuell f�r In & Outdoor geeignet. Schlank und kompakt, ideal geeignet f�r Ihre Garage, die Werkstatt oder Gartenh�user",
                Price = 19.91,
                Description = "Quarz Infrarot Heizung"
            });

            products.Add(new Recommendation()
            {
                Id = 2,
                DeliveryCost = 0,
                Rating = 5,
                Summary = "Super f�r Tennis, Fu�ball und sonstige Freizeitaktivit�ten.",
                Price = 12.95,
                Description = "Nike U NK Everyday CUSH Crew 3PR Socks"
            });

            return products;
        }
    }
}