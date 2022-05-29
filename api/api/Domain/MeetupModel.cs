using System.ComponentModel.DataAnnotations;

namespace SemihCelek.Meetup.api.Domain
{
    public class MeetupModel
    {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }

        public string Description { get; set; }

        public string Subject { get; set; }
    }
}