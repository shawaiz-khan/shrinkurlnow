import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/outline";

function UserCard() {
  return (

    <Card className="border w-80 rounded-lg bg-color-[#a50046] dark:bg-color-[#5400a7] shadow-sm">
      <CardHeader className="m-3 text-left lounded-lg absolute grid h-15 w-15 bg-color-[#a50046] dark:bg-color-[#5400a7]">
        <UsersIcon className="grid h-12 w-12 " />
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="text-3xl font-bold mb-4 text-end">
          Today's Users
        </Typography>
        <Typography variant="h4" color="blue-gray">
          230
        </Typography>
      </CardBody>
      <CardFooter className="border-t border-blue-gray-50 p-4">

      </CardFooter>
    </Card>

  );
}

export default UserCard;
