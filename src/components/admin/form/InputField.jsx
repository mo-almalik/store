const InputField = ({ label, register, name, errors,type='text' ,onChange }) => (
    <div>
      <label>{label}</label>
      <input {...register(name)} onChange={onChange} type={type} className="border p-2 border-gray-300 rounded w-full" />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
  
  export default InputField;