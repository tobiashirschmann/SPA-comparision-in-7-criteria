import { motion} from 'framer-motion'
export default function Account() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

        <h1>Mein Konto</h1>

        <div>
            <p>Name: Maffay </p>
            <p>Vorname: Peter</p>
            <p>Telefon: 01252 122452211</p>
            <p>E-Mail: peter.maffay@web.de</p>
        </div>

      </motion.div>
    );
  }