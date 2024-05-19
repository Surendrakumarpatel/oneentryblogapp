import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle, 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormDialog({ open, setOpen }: { open: boolean, setOpen: any }) {

    const submitHandler = async (formData:FormData) => {
        try {
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const number = formData.get('number') as string;
            if(!name || !email || !number) throw new Error('All fiels are required');
            
            // api call ayega

            const response = await fetch('http://localhost:3000/api/contactus', {
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({name, email, number})
            });
            if(!response.ok){
                throw new Error('Failed to submit form')
            }
            const resData = await response.json();
            console.log(resData);
        } catch (error) {
            throw new Error("Failed!")
        }
        setOpen(false);
    }

    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        Raise your query...
                    </DialogDescription>
                </DialogHeader>
                <form action={submitHandler} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            className="col-span-3"
                            placeholder="Patel"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="username"
                            name="email"
                            className="col-span-3"
                            placeholder="patel@gmail.com"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Number
                        </Label>
                        <Input
                            id="username"
                            name="number"
                            className="col-span-3"
                            placeholder="9090909090"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
