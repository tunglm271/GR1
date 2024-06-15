<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->time('deadline');
            $table->timestamps();
            $table->unsignedBigInteger('creater');
            $table->foreign('creater')->references('id')->on('users');
            $table->unsignedBigInteger('assignee');
            $table->foreign('assignee')->references('id')->on('users');
            $table->unsignedBigInteger('workspace');
            $table->foreign('workspace')->references('id')->on('workspaces');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
