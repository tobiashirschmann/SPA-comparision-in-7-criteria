namespace m5_asynchronerDatenAbruf_api
{
    public class Recommendation
    {
        public int Id { get; set; }
        public string Description  { get; set; }

        public double Price { get; set; }

        public double DeliveryCost { get; set; }

        public int Rating { get; set; }

        public string? Summary { get; set; }
    }
}