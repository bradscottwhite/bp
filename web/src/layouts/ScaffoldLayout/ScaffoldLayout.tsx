import { useEffect, useState, cloneElement } from 'react';
import Toast from "src/components/UIComponents/Toast";
import { Link, routes } from '@redwoodjs/router'
import Button from "src/components/UIComponents/shared/Button";
import { clsx } from 'clsx';

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  const [toastToggle, toggleToast] = useState(false);
  const [toastTitle, setToastTitle] = useState<string>();
  const [toastDesc, setToastDesc] = useState<string>();

  const toast = (title: string, desc: string): void => {
    setToastTitle(title);
    setToastDesc(desc);
    toggleToast(true);
  };
  useEffect(() => {
    console.log(children)
    //console.log(cloneElement(children, { toast }))
  }, [])

  return (
    <>
      <Toast title={toastTitle} desc={toastDesc} toggle={toastToggle} />
      
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="text-2xl font-bold text-gray-900 dark:text-gray-100 px-20">
            {title}
          </Link>
        </h1>
        <Button>
          <Link to={routes[buttonTo]()} className='flex'>
            <span className='text-2xl leading-5 mr-1'>+</span> {buttonLabel}
          </Link>
        </Button>
      </header>
      <main
        className={clsx(
          'w-screen py-20',
          'bg-white dark:bg-gray-800',
          'border-y border-gray-200 dark:border-gray-700',
          'justify-center flex'
        )}
      >
        <div className='w-2/3 text-gray-700 dark:text-gray-400'>
          {/*cloneElement(children, { toast })*/ children}
        </div>
      </main>
    </>
  )
}

export default ScaffoldLayout
