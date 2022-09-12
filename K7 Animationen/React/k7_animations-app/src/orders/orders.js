import Order from "../order/Order";
import { motion} from 'framer-motion'

export default function Orders() {

    return (
  
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <h1>Meine Bestellungen</h1>
        <Order artikel="Schweizer Bergkäse" menge="5" preis="3.99"/>
        <Order artikel="Frankreicher Brocciu" preis="0" menge="500"></Order>
        <Order artikel="Italienischer Parmesankäse" preis="-2" menge="30"></Order>
    </motion.div>
    );
  }