import Container from "../Container";
import MapLocation from "../MapLocation";

const ContactForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col my-[3.5rem]'>
      <Container>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-[100%] flex flex-col glassmorphism'
        >
          <div className="flex gap-10">
            <input
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
              type='text'
              placeholder='Name'
              required
              className='form_input w-full border-2 border-[rgba(63, 62, 62, 0.106)] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
            />
            <input
              value={post.email}
              onChange={(e) => setPost({ ...post, email: e.target.value })}
              type='text'
              placeholder='Email Address'
              required
              className='form_input w-full border-2 border-[rgba(63, 62, 62, 0.106)] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
            />
          </div>
          <div className="flex gap-10">
            <input
              value={post.subject}
              onChange={(e) => setPost({ ...post, subject: e.target.value })}
              type='text'
              placeholder='Subject'
              required
              className='form_input w-full border-2 border-[rgba(63, 62, 62, 0.106)] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
            />
            <input
              value={post.phone}
              onChange={(e) => setPost({ ...post, phone: e.target.value })}
              type='text'
              placeholder='Phone number'
              required
              className='form_input w-full border-2 border-[rgba(63, 62, 62, 0.106)] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
            />
          </div>
          <div>
            <textarea
              value={post.message}
              onChange={(e) => setPost({ ...post, message: e.target.value })}
              placeholder='Write your message here'
              required
              className='form_textarea w-full h-[250px] border-2 border-[rgba(63, 62, 62, 0.106)] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
            />
          </div>


          <div className='flex-end mx-3 mb-5 gap-4'>
            <button
              type='submit'
              disabled={submitting}
              className='px-5 py-[1.3rem] w-[280px] text-sm bg-indigo-800 rounded-full text-white hover:bg-gradient-to-r from-blue-800 to-blue-700'
            >
              Send Message
            </button>
          </div>
        </form>
        <MapLocation />
      </Container>
    </section>
  );
};

export default ContactForm;