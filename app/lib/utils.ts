import { placeholderData } from '@/app/lib/placeholder_data';

export const calculateMetricBMI = (heightCm: number, weightKg: number) => {
    const heightMeters = heightCm / 100;
    return weightKg / (heightMeters * heightMeters);
  };

export const calculateImperialBMI = (heightFt: number, heightIn: number, weightSt: number, weightLbs: number) => {
    const totalHeightInInches = (heightFt * 12) + heightIn;
    const totalWeightInPounds = (weightSt * 14) + weightLbs;
    return (totalWeightInPounds / (totalHeightInInches * totalHeightInInches)) * 703;
};

export const setMessage = (result: string)=> {
  let message, intervalWeight;
  const resultNumber = Number(result);
  if (resultNumber < 18.5){
      message = placeholderData.Metric[0]['message'];
      intervalWeight = placeholderData.Metric[0]['idealWeight'];
  }
  else if (resultNumber >= 18.5 && resultNumber < 24.9){
      message = placeholderData.Metric[1]['message'];
      intervalWeight = placeholderData.Metric[1]['idealWeight'];
  }
  else if (resultNumber >= 25 && resultNumber < 29.9){
      message = placeholderData.Metric[2]['message'];
      intervalWeight = placeholderData.Metric[2]['idealWeight'];
  }
  else if (resultNumber >= 30 && resultNumber < 39.9){
      message = placeholderData.Metric[3]['message'];
      intervalWeight = placeholderData.Metric[3]['idealWeight'];
  }
  else if (resultNumber >= 40){
      message = placeholderData.Metric[4]['message'];
      intervalWeight = placeholderData.Metric[4]['idealWeight'];
  }
  
  return [message, intervalWeight];
}