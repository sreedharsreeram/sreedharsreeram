import Image from 'next/image';
import profilePicture from './pfp.jpg'; // Adjust the path as needed

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-900 w-full"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:-ml-8 relative -mt-12">
            <div className="w-52 h-52 rounded-full overflow-hidden border-8 border-gray-300 dark:border-gray-600 shadow-lg">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Makes sure the image content fits properly
              />
            </div>
          </div>
          {/* Text Section */}
          <div>
            <p className="text-lg mb-6 font-light leading-relaxed text-gray-800 dark:text-gray-300">
              Sreeram Sreedhar is a sophomore at Arizona State University where he is studying
              computer science. He is interested in web development, computer vision, and machine
              learning. He is currently working on a project that uses machine learning to predict
              the outcome of a cricket match in the Indian Premiere League. In his free time, he
              enjoys playing tennis and guitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
