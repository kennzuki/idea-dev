import { createFileRoute, useNavigate } from '@tanstack/react-router'
import type { Idea } from '@/types';
import { useState } from 'react';

export const Route = createFileRoute('/ideas/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');

  return  <div className='space-y-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>Create New Idea</h1>
      </div>
      <form  className='space-y-2'>
        <div>
          <label
            htmlFor='title'
            className='block text-gray-700 font-medium mb-1'
          >
            Title
          </label>
          <input
            id='title'
            type='text'
           
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter idea title'
          />
        </div>

        <div>
          <label
            htmlFor='summary'
            className='block text-gray-700 font-medium mb-1'
          >
            Summary
          </label>
          <input
            id='summary'
            type='text'
            
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter idea summary'
          />
        </div>

        <div>
          <label
            htmlFor='body'
            className='block text-gray-700 font-medium mb-1'
          >
            Description
          </label>
          <textarea
            id='body'
            
            rows={6}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Write out the description of your idea'
          />
        </div>

        <div>
          <label
            htmlFor='tags'
            className='block text-gray-700 font-medium mb-1'
          >
            Tags
          </label>
          <input
            id='tags'
            type='text'
            
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='optional tags, comma separated'
          />
        </div>

        <div className='mt-5 mx-auto text-center'>
          <button
            type='submit'
            
            className='block w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Save
          </button>
        </div>
      </form>
    </div>
}
