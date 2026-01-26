import { useEffect, useState } from "react";
import "./styling/Macros.css";

function Macros({ formData }) {
  // RMR or BMR
  const [maleRMR, setMaleRMR] = useState(0.0);
  const [femaleRMR, setFemaleRMR] = useState(0.0);

  // TDEE
  const [tdee, setTDEE] = useState(0.0);

  useEffect(() => {
    if (!formData?.gender) return;

    if (formData.gender === "male") {
      let rmr1 = 9.99 * formData.weight;
      let rmr2 = 6.25 * formData.height;
      let rmr3 = 4.92 * formData.age + 5;

      let RMR_MALE = rmr1 + rmr2 - rmr3;
      setMaleRMR(RMR_MALE);

      let final_tdee_male = RMR_MALE * parseFloat(formData.activity);
      setTDEE(final_tdee_male);
    } else {
      let rmr1 = 9.99 * formData.weight;
      let rmr2 = 6.25 * formData.height;
      let rmr3 = 4.92 * formData.age - 161;

      let RMR_FEMALE = rmr1 + rmr2 - rmr3;
      setFemaleRMR(RMR_FEMALE);

      let final_tdee_female = RMR_FEMALE * parseFloat(formData.activity);
      setTDEE(final_tdee_female);
    }
  }, [
    formData.gender,
    formData.weight,
    formData.height,
    formData.age,
    formData.activity,
  ]);

  const protein_g = formData.weight * 2;
  const fat_g = (tdee * 0.25) / 9;
  const carb_g = (tdee - protein_g * 4 - fat_g * 9) / 4;

  return (
    <>
      <div>
        <h1>Your Suggested Macros</h1>
        {formData.gender === "male" ? (
          <>
            <p>Calories : {Number(tdee).toFixed(2)} kcal</p>
            <p>Protein : {Number(protein_g).toFixed(2)} g</p>
            <p>Carbohydrates : {Number(carb_g).toFixed(2)} g</p>
            <p>Fats : {Number(fat_g).toFixed(2)} g</p>
          </>
        ) : (
          <>
            <p>Calories : {Number(tdee).toFixed(2)} kcal</p>
            <p>Protein : {Number(protein_g).toFixed(2)} g</p>
            <p>Carbohydrates : {Number(carb_g).toFixed(2)} g</p>
            <p>Fats : {Number(fat_g).toFixed(2)} g</p>
          </>
        )}
        <button>Get My Diet Plan    </button>
      </div>
    </>
  );
}

export default Macros;
