import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { data } from "@/data/courseCurriculum"

const MobileViewTab = () => {
  return (
    <Tabs defaultValue={data[0].value} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 md:h-[350px]">
  <TabsList className="flex flex-col">
    {data.map((course, index) => (
        <TabsTrigger key={course.id} value={course.value} className="flex justify-between items-center gap-2 text-left"> 
        <p>
        <strong> {course.title + " "} </strong>  <span className="ml-1 md:ml-2 text-sm">({course.duration}) </span>
        </p>
        <Badge className="bg-[#E7EAEE] text-black p-2 flex-shrink-0 hover:text-black hover:bg-[#E7EAEE]">Module {index + 1}</Badge>
        </TabsTrigger>
    ))}
  </TabsList>
  {data.map((course) => (
      <TabsContent key={course.value} value={course.value} className="bg-primary p-4 rounded-md text-white h-max">
        <p>Topics</p>
        <Separator className="my-2" />
        {course.content.map((info, index) => (
            
            <p key={index} className="list-item list-inside">{info}</p>
        ))}
      </TabsContent>
  ))}
</Tabs>

  )
}
export default MobileViewTab