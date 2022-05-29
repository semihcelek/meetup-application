using System;
using System.ComponentModel.DataAnnotations;

namespace SemihCelek.Meetup.api.Domain
{
    public class PostModel
    {
        [Key]
        public int Id { get; set; }
        
        public string Title { get; set; }

        public string Content { get; set; }

        public MeetupModel MeetupPost { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}