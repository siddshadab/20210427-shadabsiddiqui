let expect = require('chai').expect;
let bmiCalculator = require('../bmi-calculator');

describe('bmiCalculator', async function () {
    console.log("result");
    it('should return Bmi Json', async function () {
      var preResult = '[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",  "HeightCm": 167, "WeightKg": 82}]';
      var result = await bmiCalculator.calculateBmiBasedOnJson(`[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",  "HeightCm": 167, "WeightKg": 82}]`);
      console.log(result);
      expect(result).to.be.equal(preResult);
  
    });
});