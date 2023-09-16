import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section className='bg-secondery text-white px-5 py-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
            About Me
          </h2>
          <p className='pb-5'>
            Hi, My Name Is Kushtar Tynarbek. I am a Frontend Developer. I build
            beautifull websites with React and Tailwind CSS.
          </p>
          <p className='pb-5'>
            I am proficient in Frontend skills like React.js, Redux, Axios,
            Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I like to read books, articles and write blogs on
            my Blog. Also, I help beginners to navigate through programming
            world as a software engineer, and build various projects as well as
            building one's profile portfolio.
          </p>
        </div>
        <div className='about-img'>
          <img
            src={AboutImg}
            alt='coding illustration'
            className='lgw-[80%] md:ml-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
