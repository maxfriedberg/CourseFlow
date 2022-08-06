import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import WorkloadCard from '../../courseflow/js/components/WorkloadCard'

const workloadCardTestModel = (workload) => () => {
  if (workload) {
    test('render', async () => {
      const handleClick = jest.fn()
      await act(async () => {
        render(<WorkloadCard text={workload} workload={workload} onClick={handleClick} />)
      })
      const workload = screen.getByTestId('workload-card')
      expect(workload).not.toBeNull()
      fireEvent.click(workload)
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(workload).toMatchSnapshot()
    })
  }
  else {
    test('render with onClick', async () => {
      const handleClick = jest.fn()
      await act(async () => {
        render(<WorkloadCard onClick={handleClick}/>)
      })
      const workload = screen.getByTestId('workload-card')
      expect(workload).not.toBeNull()
      fireEvent.click(workload)
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(workload).toMatchSnapshot()
    })

    test('render with no props', async () => {
      await act(async () => {
        render(<WorkloadCard />)
      })
      const workload = screen.getByTestId('workload-card')
      expect(workload).not.toBeNull()
      expect(workload).toMatchSnapshot()
    })
  }
}

export default workloadCardTestModel;