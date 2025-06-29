import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <div className="mt-40 flex flex-col justify-center items-center text-white px-4 text-center">
      <motion.h1
        className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.p
        className="mt-4 text-2xl font-semibold text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! Page Not Found.
      </motion.p>

      <motion.p
        className="mt-2 text-sm text-gray-500 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
