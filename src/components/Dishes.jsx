import { DISHES } from "../constants";
import DishCard from "./DishCard";
const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 p-4">
        {DISHES.map((project, index) => (
          <DishCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
