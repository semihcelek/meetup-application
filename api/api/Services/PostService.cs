using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SemihCelek.Meetup.api.Data;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public class PostService : IPostService
    {
        private readonly DataContext _dataContext;

        public PostService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<PostModel>> GetAllPostsAsync()
        {
            return await _dataContext.PostDataContext.ToListAsync();
        }

        public async Task<bool> CreatePostAsync(PostModel post)
        {
            await _dataContext.PostDataContext.AddAsync(post);
            var created = await _dataContext.SaveChangesAsync();
            return created > 0;
        }

        public async Task<PostModel> GetPostAsync(int id)
        {
            return await _dataContext.PostDataContext.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<bool> DeletePostAsync(int id)
        {
            PostModel postToDelete = await GetPostAsync(id);
            _dataContext.PostDataContext.Remove(postToDelete);
            await _dataContext.SaveChangesAsync();
            return true;
        }
    }
}