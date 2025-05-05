import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return 'Mostrar todos los usuarios'; 
    }

    @Get(':id')
    findOne(){
        return 'Mostrar usuario con ID: ${id}'; 
    }
    @Post() 
    create(@Body() body: any){
        return{
            message: 'Usuario creado', 
            data: body,
        }; 
    }
    
    @Put(':id')
    update(@Param('id')id: string, @Body() body: any){
        return{
            message: 'Usuario con ID ${id} actualizado', 
            data: body, 
        }; 
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return 'usuario con ID ${id} eliminado'; 
    }
    
}
