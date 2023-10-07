import { stats } from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 m-6 sm:ml-20`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-2">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
