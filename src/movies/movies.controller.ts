import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all movies";
  }

  @Get('search')
  searchMovies(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with id: ${movieId}`;
  }

  @Post() 
  createMovie(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: string) {
    return `This will delete a movie with id: ${movieId}`;
  }

  @Patch(':id')
  updateMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovieId: movieId,
      ...updateData,
    };
  }
}
