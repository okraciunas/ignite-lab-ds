import { Envelope, Lock } from 'phosphor-react'
import {
  Button,
  Checkbox,
  Heading,
  Input,
  ReactLogo,
  Text,
} from './../../components'

export function SignIn() {
  return (
    <div className='bg-gray-900 flex flex-col items-center justify-center text-gray-100 py-12'>
      <header className='flex flex-col items-center'>
        <ReactLogo />
        
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        
        <Text size='lg' className='text-gray-400 mt-2'>
          Faça login e comece a usar
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Envelope size={24}/>
            </Input.Icon>
            <Input.Field id="email" type="email" placeholder='Digite seu e-mail' />
          </Input.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <Input.Root>
            <Input.Icon>
              <Lock size={24}/>
            </Input.Icon>
            <Input.Field id="password" type="password" placeholder='********' />
          </Input.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' fullWidth className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
        </Text>

        <Text size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
