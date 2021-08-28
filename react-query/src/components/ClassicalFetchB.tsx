import { VFC } from "react";
import { useClassicalFetch } from "../hooks/useClassicalFetch";
import { useHistory } from "react-router";
import { ChevronDoubleLeftIcon } from "@heroicons/react"
import { useStateContext } from "../context/StateProvider";

export const ClassicalFetchA: VFC = () => {
  const history = useHistory()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((tasks) => (
        <p key={tasks.id}>{tasks.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/fetch-a')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
