import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Swal from 'sweetalert2';
import { FiAlertCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

const formSchema = z.object({
  fullName: z.string().min(3, { message: 'El nombre completo debe tener al menos 3 caracteres' }),
  email: z.string().email({ message: 'Dirección de correo electrónico no válida' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .regex(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
    .regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número' }),
  phone: z.string().optional(),
  bio: z.string().max(200, { message: 'La biografía no debe exceder los 200 caracteres' }).optional(),
});

const FormInput = ({ label, type, register, error, placeholder }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        {...register}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
        }`}
        placeholder={placeholder}
      />
      {error && (
        <div className="flex items-center mt-1 text-red-500 text-sm">
          <FiAlertCircle className="mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: '¡Éxito!',
      text: '¡Formulario enviado con éxito!',
      icon: 'success',
      confirmButtonColor: '#3B82F6',
    }).then(() => {
      reset();
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Formulario de Registro</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <FormInput
            label="Nombre Completo"
            type="text"
            register={register('fullName')}
            error={errors.fullName}
            placeholder="Juan Pérez"
          />
          <FormInput
            label="Correo Electrónico"
            type="email"
            register={register('email')}
            error={errors.email}
            placeholder="juan@ejemplo.com"
          />
          <FormInput
            label="Contraseña"
            type="password"
            register={register('password')}
            error={errors.password}
            placeholder="********"
          />
          <FormInput
            label="Número de Teléfono (Opcional)"
            type="tel"
            register={register('phone')}
            error={errors.phone}
            placeholder="+1234567890"
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Biografía (Opcional)</label>
            <textarea
              {...register('bio')}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.bio ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              rows="4"
              placeholder="Cuéntanos sobre ti"
            />
            {errors.bio && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <FiAlertCircle className="mr-1" />
                <span>{errors.bio.message}</span>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// PropTypes validation for FormInput component
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  placeholder: PropTypes.string,
};

export default App;
